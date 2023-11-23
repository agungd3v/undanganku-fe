import { NextApiRequest, NextApiResponse } from "next";

export const apiHandler = {
	onError: (err:Error, req: NextApiRequest, res: NextApiResponse) => {
		res.status(500).end(err.toString());
	},
	onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
		res.status(405).json({ 
			status: false,
			message: "Methode not Allowed"
		});
	},
};
