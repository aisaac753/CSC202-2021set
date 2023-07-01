export class CreateUserDto {
    readonly id: number;
    readonly title?: string;
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly email: string;
    readonly dateOfBirth?: Date;
    readonly nationality?: string
    readonly address?: string
    readonly isActive?: boolean;
}