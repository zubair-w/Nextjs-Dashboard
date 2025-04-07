import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest, { params }: { params: { id: string } }) : Promise<NextResponse> {
    const id = parseInt(params.id);

    const note = await prisma.notes.findUnique({
        where: {
            id,
        }
    });

    if(!note){
        return NextResponse.json(
            {
                success: true,
                message: 'Detail Data Note Not Found',
                data: null,
            },
            {
                status: 404
            }
        )
    }

    return NextResponse.json(
        {
          sucess: true,
          message: 'Detail Data Note',
          data: note,
        },
        {
          status: 200,
        }
      );
}

    
    // function to update note
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
 
    const id = parseInt(params.id);
  
   
    const { content } = await request.json();
  
  
    const note = await prisma.notes.update({
      where: {
        id,
      },
      data: {
        content,
        updateAt: new Date(),
      },
    });
  
    return NextResponse.json(
      {
        sucess: true,
        message: 'Data Note Updated!',
        data: note,
      },
      {
        status: 200,
      }
    );
  }
 
  
  // function to delete note
  export async function DELETE(request: NextRequest,  { params }: { params: { id: string } }) {

    const id = parseInt(params.id);
 
    await prisma.notes.delete({
      where: {
        id,
      },
    });
  
  
    return NextResponse.json(
      {
        sucess: true,
        message: 'Data Note Deleted!',
      },
      {
        status: 200,
      }
    );
  }


