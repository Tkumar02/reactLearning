function Profile (props){
    //console.log(props)
    const {name,lastname} = props;

    return <div>
        Name: {name} {props.lastname}
        {props.children}
        </div>
}

export default Profile;