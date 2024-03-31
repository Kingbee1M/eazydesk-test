import Cookies from 'js-cookie'

const setCookie = (cookiename: any, userID: any) => {
	Cookies.set(cookiename, userID, {
		expires: 2, //2 days
		HttpOnly:true,
		secure: false,
		sameSite: "Strict",
		path:'/'
	})
		
}

export default setCookie

 