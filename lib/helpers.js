/**
 * module with helper functions
 * @module lib/helpers
 */


/**
 * Helper function for use in routes.
 * Redirects user to login page if he is not authenticated.
 * @param {object} req - HTTP request.
 * @param {object} res - HTTP response.
 * @param {function} next - function to call the next middleware function in the stack.
 *
 */
module.exports.ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect("/auth/login");
};