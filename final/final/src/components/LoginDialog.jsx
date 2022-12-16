import '../static/css/LoginModal.css'
function LoginDialog({ loginFormRef ,confirmLoginDialogRef}) {
    return (
        <dialog className="modal" ref={confirmLoginDialogRef} aria-label="Login dialog">
            <p className="modal-title">You can only comment after logging in. Do you want to log in?</p>
            <form className="modal-form">
                <div className="login-button">
                    <button className="open-login-form" type='button' onClick={() => {
                        confirmLoginDialogRef.current.close();
                        loginFormRef.current.showModal();
                    }} aria-label="Open login form button">Login</button>
                    <button className="close-confirm-login" type="button" onClick={() => confirmLoginDialogRef.current.close()} aria-label="close button">Close</button>
                </div>
            </form>
        </dialog>
    );
}

export default LoginDialog;