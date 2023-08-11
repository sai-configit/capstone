import './button.styles.scss';
const button_type_classes = {
    google: 'google-sign-in',
    inverted: 'inverted'
};


const Button = ({ children, btype, ...otherprops }) => {
    return (

        <button className={`button-container ${button_type_classes[btype]} `} {...otherprops} >{children}</button>
    );
}

export default Button;