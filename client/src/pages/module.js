import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const GET_MODULE_TRACKS = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        title
        id
        length
      }
    }
    module(id: $moduleId) {
      title
      id
      videoUrl
      content
    }
  }
`;
const Module = () => {
  const { moduleId, trackId } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_TRACKS, {
    variables: {
      moduleId,
      trackId,
    },
  });
  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.track && data?.module && (
          <ModuleDetail track={data.track} module={data.module}></ModuleDetail>
        )}
      </QueryResult>
    </Layout>
  );
};

export default Module;
