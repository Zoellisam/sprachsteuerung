voiceRecognition.init()
voiceRecognition.set_volume(7)
voiceRecognition.set_mute_mode(voiceRecognition.MUTE.OFF)
voiceRecognition.set_wake_time(60)

def on_forever():
    pass
basic.forever(on_forever)
