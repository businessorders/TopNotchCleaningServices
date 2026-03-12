'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useEditMode } from './EditModeProvider';

interface EditableTextProps {
  id: string;
  defaultContent: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  className?: string;
}

export function EditableText({
  id,
  defaultContent,
  as: Component = 'p',
  className = '',
}: EditableTextProps) {
  const { isEditMode, editedContent, updateContent } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Get the current content from editedContent or default
  const content = useMemo(() => {
    return editedContent[id] || defaultContent;
  }, [editedContent, id, defaultContent]);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setEditValue(content); // Initialize edit value when entering edit mode
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateContent(id, editValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setEditValue(content);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <textarea
        ref={inputRef}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} w-full bg-yellow-50 border-2 border-blue-400 rounded p-1 outline-none resize-none`}
        rows={Math.min(editValue.split('\n').length + 1, 5)}
      />
    );
  }

  return (
    <Component
      className={`${className} ${isEditMode ? 'cursor-pointer hover:bg-yellow-50 hover:border-dashed hover:border-2 hover:border-blue-400 rounded px-1 -mx-1 transition-colors' : ''}`}
      onClick={handleClick}
      title={isEditMode ? 'Click to edit' : undefined}
    >
      {content}
    </Component>
  );
}
