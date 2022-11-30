import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { api } from '@/services/axios';

interface useQueryPatchProps {
  url: `/${string}/`;
  mutationKey: Array<string | number>;
  params?: { [key: string]: string | number };
}

interface tPayload<T> {
  patchId: string;
  payload: T;
}

export const useQueryPatch = <Payload = any, tResponse = any>({
  url,
  mutationKey,
  params,
}: useQueryPatchProps) => {
  const mutation = useMutation<
    AxiosResponse<tResponse>,
    AxiosError,
    tPayload<Payload>
  >({
    mutationFn: ({ patchId, payload }) =>
      api.patch(`${url}${patchId}`, payload, { params }),
    mutationKey,
  });

  return { ...mutation, patch: mutation.mutate };
};
