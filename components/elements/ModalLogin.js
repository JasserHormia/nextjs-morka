import { SignIn } from "@clerk/nextjs"
import Link from "next/link"

export default function ModalLogin({ isLogin, handleLogin, isRegister, handleRegister }) {
	return (
		<>
			<div className={`modal fade ${isLogin ? "show d-block" : ""}`} id="modalLogin">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="flat-account bg-surface">
							<h3 className="title text-center">Log In</h3>
							<span className="close-modal icon-close2" onClick={handleLogin} />
							<SignIn/>
						</div>
					</div>
				</div>
			</div>

			{isLogin &&
				<div className={`modal-backdrop fade show`} onClick={handleLogin} />
			}

		</>
	)
}
