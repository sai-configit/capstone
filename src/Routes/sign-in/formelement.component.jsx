import './form-input.styles.scss';

const Forminput = ({ label, ...otherprops }) => {


    return (
        <div className="group">

            <input className='form-input' {...otherprops} ></input>
            {
                (() => {

                    if (label) {
                        return (

                            <label
                                className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`} >{label}</label >
                        );
                    }

                })()


            }



        </div >

    );
}

export default Forminput;

// {`${otherprops.value.length ? 'shrink' : ''} form-input-label`}