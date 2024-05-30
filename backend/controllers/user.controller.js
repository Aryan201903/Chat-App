import User from "../model/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar function", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
