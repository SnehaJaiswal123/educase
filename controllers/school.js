const db=require('../config/database')

const addSchool=(req,res)=>{
    try{
        const { name, address, latitude, longitude } = req.body;

        if (!name || !address || !latitude || !longitude) {
            return res.status(400).send('All fields are required.');
        }

        const query = 'INSERT INTO Schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.query(query, [name, address, latitude, longitude], (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('School added successfully.');
        });
    }
    catch(err){
        res.status(500).send({
            message:"Something went wrong while adding school",
            error:err.message
        })
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
}

const listSchools=(req,res)=>{
    try{
        const {latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).send(`User's latitude and longitude is required`);
        }

        const query = 'SELECT * FROM Schools';

         db.query(query,(err,result)=>{
            const sortedSchools = result.map(school => {
                return {
                    ...school,
                    distance: calculateDistance(latitude, longitude, school.latitude, school.longitude)
                };
            }).sort((a, b) => a.distance - b.distance);
            res.status(200).send({
                "Schools":sortedSchools
            })
         })
       
    }
    catch(err){
        res.status(500).send({
            message:"Something went wrong while fetching schools",
            error:err.message
        })
    }
}

module.exports={addSchool,listSchools}