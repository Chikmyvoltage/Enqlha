const SignUp = () => {


	setTimeout(() => {

		const approot = document.getElementById("approot");
		approot.style.background = "#fff"
	}, 1);
	return (
		<div className="signup-screen">
			<div className="signup-content">
				<h3>إنضم إلينا</h3>
				<form action="/signup" method="post">
					<input type="text" placeholder="اسم المستخدم" name="username"/>
					<input type="email" placeholder="البريد الكتروني" name="email"/>
					<input type="password" placeholder="الرقم السري" name="password"/>
					<input type="submit" value="تسجيل"/>
				</form>
			</div>
		</div>

	);
}

export default SignUp;
