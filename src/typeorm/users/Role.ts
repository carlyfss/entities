import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Role entity fields:
 * - @id - *String*
 * - @name - *String*
 * - @info - returns useful information about the entity:**id**, **name**
 */
@Entity('roles')
export default class Role {
  constructor(partial: Partial<Role>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  get info(): Partial<Role> {
    return {
      id: this.id,
      name: this.name
    }
  }
}