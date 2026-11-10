package main

import (
	"context"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// HandleIn1Out1 accepts a string input, converts it to uppercase, and returns it.
func (a *App) HandleIn1Out1(input string) string {
	return strings.ToUpper(input)
}
