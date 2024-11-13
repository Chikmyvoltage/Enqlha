export default routes = [
	{
		path: "/",
		Component: Home,
		children: [
			{
				path: "signup",
				Component: SignUp
			},
			{
				path: "programs",
				Component: Programs
			},
			{
				path: "faq",
				Component: FaqScreen
			},
			{
				path: "workshop",
				Component: WorkShop,
				children: [
					{
						path: "courses",
						Component: Courses
					},
					{
						path: "groups",
						Component: Groups
					}
				]
			}
		]
	},
	
]

