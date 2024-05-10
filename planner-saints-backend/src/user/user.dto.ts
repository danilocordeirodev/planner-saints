import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	Min,
	MinLength
} from 'class-validator'

export class PomodoroSettignsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	breakInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	@Max(10)
	intervalsCount?: number
}

export class UserDto extends PomodoroSettignsDto {
	@IsEmail()
	@IsOptional()
	email?: string

	@IsString()
	@IsOptional()
	name?: string

	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	@IsOptional()
	password?: string
}
