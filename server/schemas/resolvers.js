const { User, Strain, Illness } = require("../models");
const { signToken, AuthenticationError } = require("../utils");

const resolvers = {
  Query: {
    currentUser: async (parent, { email }) => User.findOne({ email }),
    strain: async (parent, { strainId }) => {
        const params = strainId ? { strainId } : {};
        return Strain.find(params);
    },
    ilness: async (parent, { illnessId }) => {
        const params = illnessId ? { illnessId } : {};
        return Illness.find(params);
      },
  },

  Mutation: {
    register: async (parent, { firstName, email, password }) => {
      const user = await User.create({ firstName, email, password });
      const token = signToken(user);
      return { token, currentUser: user };


    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, currentUser: user };
    },

    saveLocation: async (parent, { saveLocation }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedLocations: saveLocation },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        const token = signToken(updatedUser);
        return { token, currentUser: updatedUser };
      } else {
        throw new AuthenticationError("User not authenticated");
      }
    },

    deleteLocation: async (parent, { locationId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id }, // added exception in eslintrc
          { $pull: { savedLocations: locationId } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

    saveStrain: async (parent, { saveStrain }, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            {
              $addToSet: { savedStrains: saveStrain },
            },
            {
              new: true,
              runValidators: true,
            }
          );
  
          const token = signToken(updatedUser);
          return { token, currentUser: updatedUser };
        } else {
          throw new AuthenticationError("User not authenticated");
        }
      },
  
      deleteStrain: async (parent, { strainId }, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id }, // added exception in eslintrc
            { $pull: { savedStrains: strainId } },
            { new: true }
          );
        }
        throw AuthenticationError;
      },
  }
};

module.exports = resolvers;