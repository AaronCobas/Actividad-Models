import {Router} from "express"
import viewsController from "../controller/views.controller.js"
import { productService, userService, receiptService } from "../services/services.js"

const router = Router()

router.get("/login",viewsController.login)
router.get("/register",viewsController.register)
router.get("/failedregister",viewsController.failedRegister)
router.get("/failedlogin",viewsController.failedLogin)
router.get("/",viewsController.index)
router.get("/products",viewsController.products)
router.get("/logout",viewsController.logout)
router.get("/cart",viewsController.cart)
router.get("/test",async(req,res)=>{
const exists = await userService.getBy({$and:[{email:"aaroncobas2017@gmail.com"},{cart:{$elemMatch:{productId:1}}}]}).count()
            if (exists === 0){
                res.send("test1")
            }else{
                res.send("test2")
            }
})

router.get("/*",viewsController.notExists)

export default router