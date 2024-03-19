package com.weatherapp.modules.location.mappers

import android.location.Location
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

fun Location.toWritableMap(): WritableMap {
    val coordinates = Arguments.createMap()
    coordinates.putDouble("latitude", this.latitude)
    coordinates.putDouble("longitude", this.longitude)
    return coordinates
}