import { useState, useCallback } from 'react';
import { ToastProps } from '@/react-app/components/Toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
  title: string;
  message?: string;
  duration?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((type: ToastType, options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast: ToastProps = {
      id,
      type,
      ...options,
      onClose: (toastId: string) => {
        setToasts(prev => prev.filter(t => t.id !== toastId));
      }
    };

    setToasts(prev => [...prev, toast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const success = useCallback((options: ToastOptions) => 
    addToast('success', options), [addToast]);
  
  const error = useCallback((options: ToastOptions) => 
    addToast('error', options), [addToast]);
  
  const warning = useCallback((options: ToastOptions) => 
    addToast('warning', options), [addToast]);
  
  const info = useCallback((options: ToastOptions) => 
    addToast('info', options), [addToast]);

  return {
    toasts,
    success,
    error,
    warning,
    info,
    removeToast
  };
}