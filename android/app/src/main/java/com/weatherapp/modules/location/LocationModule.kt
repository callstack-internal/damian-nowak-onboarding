package com.weatherapp.modules.location

import android.Manifest
import android.content.pm.PackageManager
import android.location.Location
import androidx.core.app.ActivityCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.gms.location.LocationServices
import com.weatherapp.modules.location.mappers.toWritableMap

class LocationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "LocationModule"

    private val locationManager = LocationServices.getFusedLocationProviderClient(reactContext)

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        val task = if (ActivityCompat.checkSelfPermission(
                reactApplicationContext,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                reactApplicationContext,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            promise.reject(Error("Insufficient permissions"))
            return
        } else {
            locationManager.lastLocation
        }

        task.addOnSuccessListener { location: Location? ->
            if (location == null) {
                promise.reject(Error("Failed to fetch location"))
                return@addOnSuccessListener
            }

            promise.resolve(location.toWritableMap())
        }
        task.addOnFailureListener {
            promise.reject(it)
        }
    }
}
