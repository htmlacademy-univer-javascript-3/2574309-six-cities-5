import { useAppForm } from '@/shared/hooks/useAppForm';

export interface UserReviewFormI {
  rating: number | null;
  review: string;
}

export const getUserReviewFormInitialdata = (): UserReviewFormI => ({
  rating: null,
  review: ''
});

export const useUserReviewForm = () => {
  const form = useAppForm({
    initialData: getUserReviewFormInitialdata(),
    onSubmit: () => {},
  });

  return form;
};


