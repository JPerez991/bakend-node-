
exports.success = function (req, res, mensaje, status){
    const statusCode = status || 200
    const mensajeOK = mensaje || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: mensajeOK
    });
}

exports.success = function (req, res, mensaje, status){
    const statusCode = status || 500
    const mensajeError = mensaje || 'Error Intento';
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: mensajeError
    });
}