module.exports = async function (context, req) {
    context.bindings.filename =  req.body.filename;
    context.bindings.outputBlob= req.body.filedata;
    context.done();
}