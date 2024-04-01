import User from '../model/user.model.js';

export const createUser = async (req,res) => {
    try{
        const newUserData = req.body;
        const newUser = new User(newUserData);

        const savedUser = await newUser.save(); 
        console.log('Saved new User data to DB');
        res.status(201).json(savedUser)
    } catch(error){
        console.error('Error in saving user data: ', error);
        res.status(500).json({error: `Internal server error`})
    }
}

export const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.json(users)
    } catch(error){
        console.error('Error fetching users data: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getUser = async (req,res) => {
    try{
        const userId = req.params.id ;
        const user = await User.findById(userId);
        res.json(user);
    } catch(error){
        console.error('Error fetching single user by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, userData, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' }); 
        }

        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error('Error in updating user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findOneAndDelete({ _id: userId }); 

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
