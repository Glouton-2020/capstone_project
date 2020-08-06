const express = require('express');
const router = express.Router();
const Schedule  = require("../models/Schedule");

//=================================
//         Schedules
//=================================

router.get('/getschedules', (req,res)=>{
    Schedule.find({}, function(err, schedules) {
        if(err) {
            res.send(err);
            return;
        }
        res.json(schedules);
    });
})

router.post("/create", (req, res) => {

    const schedule = new Schedule(req.body);

    schedule.save((err, item) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
            post: schedule
        });
    });
});

router.delete('/:userId/:scheduleId', (req,res) => {
    Schedule.findById(req.params.scheduleId, function(err, schedule) {
        if(schedule.user.toString() === req.params.userId){
            schedule.remove()
            res.json('Delete success')
        } else{
            res.json('User unauthorized')
        }
    })
});


router.put('/:id', (req, res) => {
    Schedule.findByIdAndUpdate(req.params.id, req.body, (err, updatedSchedule) => {
        res.json(updatedSchedule);
    });
});

module.exports = router;
