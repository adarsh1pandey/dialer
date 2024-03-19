package com.dialer

import android.content.Intent
import android.net.Uri
import android.view.Gravity
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CallModule (private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "CallModule";
    }

    @ReactMethod
    fun showToast(message: String){
        val toast = Toast.makeText(reactContext, message, Toast.LENGTH_SHORT)
        toast.setGravity(Gravity.CENTER, 0, 0)
        toast.show()
    }

    @ReactMethod
    fun makeCall(phoneNumber: String) {
        val intent = Intent(Intent.ACTION_CALL)
        intent.data = Uri.parse("tel:$phoneNumber")
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        reactApplicationContext.startActivity(intent)
    }
}