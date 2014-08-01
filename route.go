package main

import (
	"gottb.io/goru"
	"gottb.io/goru/route"
	"gottb.io/goru/web"
)

func speak(c *web.Context) {
	w := web.GetWriter(c)
	w.Render("speak.html", goru.Data{
		"Sentences": []string{
			"Hello",
			"Goodbye",
			"Help",
			"Help me",
			"List",
			"Yes",
			"No",
			"Open photography",
			"Add photography",
			"Remove photography",
			"Show me cute kittens",
			"Show me Arches National Park!",
			"This specification defines a JavaScript API to enable web developers to incorporate speech recognition and synthesis into their web pages.",
		},
	})
}

func recognition(c *web.Context) {
	w := web.GetWriter(c)
	w.Render("recognition.html", &goru.Data{})
}

func gesture(c *web.Context) {
	w := web.GetWriter(c)
	w.Render("gesture.html", &goru.Data{})
}

func init() {
	route.Get("/speak", speak)
	route.Get("/gesture", gesture)
	route.Get("/recognition", recognition)
}
