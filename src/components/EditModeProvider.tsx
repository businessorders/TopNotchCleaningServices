'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  editedContent: Record<string, string>;
  updateContent: (id: string, content: string) => void;
  saveAll: () => void;
  hasUnsavedChanges: boolean;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
}

interface EditModeProviderProps {
  children: React.ReactNode;
}

export function EditModeProvider({ children }: EditModeProviderProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState<Record<string, string>>(() => {
    // Load saved content from localStorage on initialization
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('deepclean-edited-content');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to load saved content:', e);
        }
      }
    }
    return {};
  });
  const [originalContent, setOriginalContent] = useState<Record<string, string>>({});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const toggleEditMode = useCallback(() => {
    setIsEditMode(prev => !prev);
  }, []);

  const updateContent = useCallback((id: string, content: string) => {
    setEditedContent(prev => {
      // Store original content on first edit
      if (!originalContent[id]) {
        setOriginalContent(prev => ({ ...prev, [id]: content }));
      }
      setHasUnsavedChanges(true);
      return { ...prev, [id]: content };
    });
  }, [originalContent]);

  const saveAll = useCallback(() => {
    localStorage.setItem('deepclean-edited-content', JSON.stringify(editedContent));
    setHasUnsavedChanges(false);
  }, [editedContent]);

  return (
    <EditModeContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        editedContent,
        updateContent,
        saveAll,
        hasUnsavedChanges,
      }}
    >
      {children}
      <EditToggleButton />
      {hasUnsavedChanges && isEditMode && (
        <div className="fixed bottom-20 right-4 z-50 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <span className="text-sm">Unsaved changes</span>
          <button
            onClick={saveAll}
            className="bg-white text-amber-600 px-3 py-1 rounded text-sm font-medium hover:bg-amber-50"
          >
            Save
          </button>
        </div>
      )}
    </EditModeContext.Provider>
  );
}

function EditToggleButton() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <button
      onClick={toggleEditMode}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isEditMode
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
      }`}
      title={isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
    >
      {isEditMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
          <path d="m15 5 4 4"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
        </svg>
      )}
    </button>
  );
}
