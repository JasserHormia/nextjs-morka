import { SignUp } from "@clerk/nextjs";

export default function ModalRegister({ isRegister, handleRegister, handleLogin }) {
	return (
		<>
			<div className={`modal fade ${isRegister ? "show d-block" : ""}`} id="modalRegister">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="flat-account bg-surface">
							<h3 className="title text-center">Register</h3>
							<span className="close-modal icon-close2" onClick={handleRegister} />
							<SignUp/>
						</div>
					</div>
				</div>
			</div>
			{isRegister &&
				<div className={`modal-backdrop fade show`} onClick={handleRegister} />
			}
		</>
	)
}
