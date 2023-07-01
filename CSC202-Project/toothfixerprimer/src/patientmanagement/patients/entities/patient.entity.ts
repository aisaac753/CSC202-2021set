import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Patient {
@PrimaryGeneratedColumn()
@Column()
title: string;
@Column()
firstName: string;
@Column()
middleName: string;
@Column()
surname: string;
@Column()
dateOfBirth: Date;
@Column()
dateofRegistration: Date;
@Column()
homeAddress: string
@Column()
matriculationNumber: string;
}