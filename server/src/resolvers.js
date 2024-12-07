const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    author: (parent, args, contextValue, info) => {
      const { dataSources } = contextValue;
      const { authorId } = parent.authorId;

      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
