'use client'

import { useEffect, useState } from 'react'

import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import type { ITimeState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'

export function useTimer(): ITimeState {
	const { breakInterval, workInterval } = useLoadSettings()

	const [isRunning, setIsRunning] = useState(false)
	const [isBreaktime, setIsBreaktime] = useState(false)

	const [secondsLeft, setSecondsLeft] = useState(workInterval * 60)
	const [activeRound, setActiveRound] = useState<IPomodoroRoundResponse>()

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null
		if (isRunning) {
			interval = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1)
			}, 1000)
		} else if (!isRunning && secondsLeft !== 0 && interval) {
			clearInterval(interval)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [isRunning, secondsLeft, workInterval, activeRound])

	useEffect(() => {
		if (secondsLeft > 0) return

		setIsBreaktime(!isBreaktime)
		setSecondsLeft(isBreaktime ? workInterval : breakInterval)
	}, [secondsLeft, isBreaktime, workInterval, breakInterval])

	return {
		activeRound,
		secondsLeft,
		setActiveRound,
		setIsRunning,
		setSecondsLeft,
		isRunning
	}
}
