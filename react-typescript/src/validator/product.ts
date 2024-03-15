import Joi from 'joi'
export const ValidateProduct = Joi.object({
    name:Joi.string().required().empty().min(6).messages({
        "any.required":"Tên sản phẩm không để trống",
        "string.empty":"Tên sản phẩm không để trống",
        "string.min":"Tên sản phẩm phải lớn hơn 6 ký tự"
    }),
    image:Joi.string().required().empty().messages({
        "any.required":"Ảnh không để trống",
        "string.empty":"Ảnh không để trống"
    }),
    price: Joi.number().required().min(1000).messages({
        "any.required":"Giá không để trống",
        "number.min":"Giá không nhỏ hơn 1000"
    })
})