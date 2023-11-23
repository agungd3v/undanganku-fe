// import type { NextApiRequest, NextApiResponse } from "next";
 
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// 	try {
// 		if (req.method === "POST") {
// 			const http = await fetch("https://undangan.loofytech.com/api/greeting", {
// 				method: "POST",
// 				body: req.body
// 			});
	
// 			if (http.status == 200) {
// 				const response = await http.json();
// 				return res.status(200).json({data: response});
// 			}
// 		} else {
// 			// Handle any other HTTP method
// 		}
// 	} catch (error) {
// 		return res.status(400).json({message: error});
// 	}
// }

import nc from "next-connect";
import { apiHandler } from "@/utils/apiHandler";

const api = nc(apiHandler);

api
	.post(async(req: any, res: any) => {
		try {
			const {undangan_id, pronouncer, relation, greeting} = JSON.parse(req.body);

			const http = await fetch("https://undangan.loofytech.com/api/greeting", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					undangan_id: undangan_id,
					pronouncer: pronouncer,
					relation: relation,
					greeting: greeting
				})
			});
	
			if (http.status == 200) {
				const response = await http.json();
				return res.status(200).json(response);
			}

			return res.status(http.status).json({message: "Error"});
		} catch (error: any) {
			return res.status(400).json(error);
		}
	})

export default api;