"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { API } from "@/config/api";
import Button from "@/components/Button";

const Task = ({params}:{params:{ id: string } }) => {
  const {id} = params;
  const route = useRouter();
  const queryClient = useQueryClient();

  const { data, isFetched, isError } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      return await API.get(`/tasks/${id}`);
    },
  });

  const handleGoBack = () => {
    route.back()
  }

  const handleSubmit = async () => {
    await queryClient.invalidateQueries([`tasks`]);
  }

  return (
    <div className="min-h-screen pt-60 bg-slate-950">
      <div className="flex flex-col justify-center items-center">
        <div className="w-2/4">
          <div className="mb-4">
            <Button
              onClick={() => handleGoBack()}
              className="py-1 px-4 rounded-lg border-2 border-red-600 text-red-600 hover:text-white"
              id={`go-back-${id}`}
              label="Voltar"
              type="button"
            />
          </div>
          
          <div className="rounded-lg overflow-hidden bg-slate-600">
            <div className="bg-slate-800 p-4">
              <p><b>id:</b> {data?.data.id}</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl">{data?.data.taskName}</h3>
            </div>
          </div>

          <div className="mt-4">
            <Button
              onClick={() => handleSubmit()}
              className="py-1 px-4 rounded-lg border-2 border-purple-600 text-purple-600 hover:text-white"
              id={`go-back-${id}`}
              label="Salvar"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
