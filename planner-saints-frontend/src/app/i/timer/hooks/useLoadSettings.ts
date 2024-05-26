import { useProfile } from '@/hooks/userProfile'

export function useLoadSettings() {
	const { data } = useProfile()

	const workInterval = data?.user.workInterval ?? 50
	const breakInterval = data?.user.breakInterval ?? 50

	return { workInterval, breakInterval }
}
