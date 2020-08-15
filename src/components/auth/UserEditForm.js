import React, { useState, useEffect } from "react"
import UserManager from "../../modules/UserManager"







const UserEditForm = props => {
    const [user, setUser] = useState({ user: "", userId: 0, img: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...user };
        stateToChange[evt.target.id] = evt.target.value;
        setUser(stateToChange);
    };


    const updateUser = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedUser = {
            userId: user.userId,
            id: props.match.params.userId,
            user: user.user,
            img: user.img,
            email: user.email

        };
        UserManager.updateSpecificUser(editedUser)
            .then(() => props.history.push("/home"))
    }


    useEffect(() => {
        UserManager.getUser(props.match.params.userId)
            .then(user => {

                setUser(user);
                setIsLoading(false);

            });
    }, [props.match.params.userId]);



    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="hidden"
                            required=""
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userId"
                            value={user.userId}
                        />
                        <label htmlFor="name">Enter new Username: </label>
                        <input
                            type="text"
                            required=""
                            className="form-control"
                            onChange={handleFieldChange}
                            id="user"
                            value={user.user}
                        />

                        <label htmlFor="name">Enter new Email Address: </label>
                        <input
                            type="text"
                            required=""
                            className="form-control"
                            onChange={handleFieldChange}
                            id="email"
                            value={user.email}
                        />
                        <label htmlFor="name">New Password </label>
                        <input
                            type="text"
                            required=""
                            className="form-control"
                            onChange={handleFieldChange}
                            id="password"
                            value={user.password}
                        />
                        {/*                 
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <input
                            type="image"
                            required =""
                            className="form-control"
                            onChange={handleFieldChange}
                            id="img"
                            value={user.img}
                        /> */}


                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateUser}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default UserEditForm