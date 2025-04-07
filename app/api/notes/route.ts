import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const { content } = await request.json();

        const note = await prisma.notes.create({
            data: {
                content
            }
        });

        return NextResponse.json({
            success: true,
            message: "Note Created Successfully",
            data: note
        }, { status: 201 });
    } catch (error) {
        console.error("Error creating note:", error);
        return NextResponse.json({
            success: false,
            message: "Error creating note"
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        const notes = await prisma.notes.findMany();

        return NextResponse.json({
            success: true,
            message: 'List Data Notes',
            data: notes
        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching notes:", error);
        return NextResponse.json({
            success: false,
            message: "Error fetching notes"
        }, { status: 500 });
    }
}
