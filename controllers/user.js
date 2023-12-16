import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {

    const users = await User.find({});

    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
};

export const register = async (req, res) => {

    const {name, email, password} = req.body;


        await User.create({
             name,
             email, // static data for use
             password,
        });

        res.status(201).cookie("tempi", "lol" ).json({
            success: true,
            message : "Done",
        });
    };

export const specialFunc = (req, res) => {
    res.json({
        success: true,
        message : "just joking bitch",
    });
};

export const getUserDetails = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    });
};

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "Updated",
    });
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    // await user.remove();

    res.json({
        success: true,
        message: "deleted",
    });
};

