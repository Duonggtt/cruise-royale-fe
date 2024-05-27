import { useToast } from 'primevue/usetoast';

export const useToastHelper = () => {
  const toast = useToast();

  const showSuccessToast = (summary: string, detail: string) => {
    toast.add({ severity: 'success', summary, detail, life: 3000 });
  };

  const showErrorToast = (summary: string, detail: string) => {
    toast.add({ severity: 'error', summary, detail, life: 3000 });
  };

  return { showSuccessToast, showErrorToast };
};