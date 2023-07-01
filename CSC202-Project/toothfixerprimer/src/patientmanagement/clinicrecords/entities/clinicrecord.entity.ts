import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Clinicrecord {
@PrimaryGeneratedColumn()
@Column()
clinicDate: Date;
@Column()
natureofAilment: string;
@Column()
medicinePrescribed: string;
@Column()
procedureUndertaken: string;
@Column()
dateofNextAppointment: Date;
}