import { Prisma, Project } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ProjectWithImage = Prisma.ProjectGetPayload<{
  include: { Image: true };
}>;

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<ProjectWithImage[], void>({
      query: () => ({
        url: "/projects",
      }),
    }),
    getProjectById: builder.query<ProjectWithImage, { id: string }>({
      query: ({ id }) => ({
        url: `/projects/${id}`,
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetProjectByIdQuery } = projectApi;
