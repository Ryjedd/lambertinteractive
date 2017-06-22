using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour {

    public float moveSpeed = 5;
    private Vector3 moveDir;
    public float yMove = 0;
    private int jumpCount = 1;
    bool jumping = false;

    float hTorq;

    void Start () {
        moveDir = new Vector3(0, 0, 0);
    }
	
	// Update is called once per frame
	void Update () {
       
        moveDir = new Vector3(0,0, Input.GetAxisRaw("Vertical")).normalized;
        hTorq = Input.GetAxis("Horizontal") * 5f * Time.deltaTime;

        if (Input.GetButton("Jump"))
        {
            if (jumping==false && jumpCount < 3)
            {
                yMove += 5 * jumpCount;
                jumpCount++;
                
            }
            else
            {
               
            }

            jumping = true;
        }
        else
        {
            
            jumping = false;
        }
    }

    private void FixedUpdate()
    {
        //GetComponent<Rigidbody>().RotateAround(transform.position, Vector3.up, Input.GetAxis("Horizontal"));

        // Quaternion deltaRotation = Quaternion.Euler( * Time.deltaTime);
        GetComponent<Rigidbody>().AddTorque(transform.up *  hTorq*3f);

        
        moveDir = new Vector3(moveDir.x * GetComponent<CharDash>().dashAmount, yMove, moveDir.z * GetComponent<CharDash>().dashAmount);
            
        
        GetComponent<Rigidbody>().MovePosition(GetComponent<Rigidbody>().position + transform.TransformDirection(moveDir) * moveSpeed * Time.deltaTime);
        
        if(yMove <= 3)
        {
            yMove = 0;
            if (jumpCount > 1)
            {
                jumpCount = 1;
            }
        }
        else
        {
            yMove -= 5*jumpCount*Time.deltaTime;
        }
    }

   
}
