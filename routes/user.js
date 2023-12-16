import express from 'express';
import { getAllUsers, register, specialFunc, getUserDetails } from "../controllers/user.js";
import { User } from "../models/user.js";

const router = express.Router();

router.get("/all", getAllUsers

// async (req, res) => {

//     const users = await User.find({});

//     const keyword = req.query.keyword;
//     console.log(keyword);

//     res.json({
//         success: true,
//         users,
//     });
// }
);

router.post("/new", register

// async (req, res) => {

//     const {name, email, password} = req.body;


//         await User.create({
//              name,
//              email, // static data for use
//              password,
//         });

//         res.status(201).cookie("tempi", "lol" ).json({
//             success: true,
//             message : "Done",
//         });
//     }
    );

router.get("/usersid/special", specialFunc
// (req, res) => {
//         res.json({
//             success: true,
//             message : "just joking bitch",
//         });
//     }
    );

router.get("/userid/:id", getUserDetails
// async (req, res) => {
//         const {id} = req.params;
//         const user = await User.findById(id);

//         res.json({
//             success: true,
//             user,
//         });
// }
);

router.put("/userid/:id", updateUser);

router.delete("/userid/:id", deleteUser);

export default router;