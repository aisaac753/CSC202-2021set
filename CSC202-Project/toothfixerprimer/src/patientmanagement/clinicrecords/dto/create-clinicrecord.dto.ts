export class CreateClinicrecordDto {
    readonly clinicDate: Date;
    readonly natureofAilment?: string;
    readonly medicinePrescribed?: string;
    readonly procedureUndertaken?: string;
    readonly dateofNextAppointment?: Date;
    }