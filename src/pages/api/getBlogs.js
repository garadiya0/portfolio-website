import connectToDatabase from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await connectToDatabase();
    const collection = client.db().collection("blogs");

    if (!isNaN(req.query.limit) && Number.isInteger(Number(req.query.limit))) {
      // limit is in String, converting it to INT
      const limitVal = parseInt(req.query.limit);

      // IF req.query.limit IS PROVIDED
      const data = await collection
        .find({})
        .limit(limitVal)
        .sort({ published_date: -1 })
        .toArray();

      res.status(200).json(data);
    } else {
      // IF req.query.limit IS NOT PROVIDED

      const data = await collection
        .find({})
        .sort({ published_date: -1 })
        .toArray();

        

      res.status(200).json(data);
    }
  } catch {
    res.status(200).json({
      data: "data not found!",
      request: "Why don't you follow me on socials below :D",
      url_insta: "https://www.instagram.com/codexhimanshu/",
      url_twitter: "https://twitter.com/garadiya0",
    });
  }
}
