const resolvers = {
  Query: () => {
    tracksForHome: (parent, args, contextValue, info) => {
      const { dataSources } = contextValue;

      return dataSources.trackAPI.getTracksForHome();
    };
  },

  Track: () => {
    author: (parent, args, contextValue, info) => {
      const { dataSources } = contextValue;
      const { authorId } = parent.authorId;

      return dataSources.trackAPI.getAuthor(authorId);
    };
  },
};

module.exports = resolvers;
