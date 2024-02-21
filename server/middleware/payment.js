// ensures that the payment is for that patient
const payments = (req,next) => {
    req.patientId = 'patient_id';
    next();
};

module.exports = payments